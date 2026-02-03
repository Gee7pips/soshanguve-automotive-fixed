-- Create updates table
CREATE TABLE IF NOT EXISTS updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  image_url TEXT,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add some sample updates
INSERT INTO updates (title, content, category, date) VALUES
('Electric Car Project Success', 'Our students successfully completed and showcased their innovative electric car project at the GDE SOS Festival.', 'Achievement', NOW()),
('Global Clean Tech Award', 'Our principal received recognition for clean energy initiatives in Abu Dhabi.', 'Award', NOW()),
('SAGE South Africa Competition', 'Students demonstrated exceptional innovation skills at the national competition.', 'Competition', NOW());

-- Enable RLS
ALTER TABLE updates ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON updates
  FOR SELECT
  USING (true);

CREATE POLICY "Enable insert/update for authenticated users only" ON updates
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_updates_updated_at
  BEFORE UPDATE ON updates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
