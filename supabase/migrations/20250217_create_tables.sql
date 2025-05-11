-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (be careful with this in production)
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS sponsorships CASCADE;

-- Create contacts table
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create applications table
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    date_of_birth DATE,
    gender VARCHAR(50),
    address TEXT,
    city VARCHAR(255),
    postal_code VARCHAR(20),
    current_school VARCHAR(255),
    grade_level VARCHAR(50),
    program VARCHAR(255),
    academic_achievements TEXT,
    extracurricular_activities TEXT,
    why_join TEXT NOT NULL,
    parent_name VARCHAR(255),
    parent_email VARCHAR(255),
    parent_phone VARCHAR(50),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create sponsorships table
CREATE TABLE sponsorships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    organization VARCHAR(255),
    area_of_interest VARCHAR(255),
    support_type VARCHAR(255),
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sponsorships_updated_at
    BEFORE UPDATE ON sponsorships
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsorships ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts
CREATE POLICY "Enable insert for all users" ON contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users only" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for applications
CREATE POLICY "Enable insert for all users" ON applications
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users only" ON applications
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for sponsorships
CREATE POLICY "Enable insert for all users" ON sponsorships
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users only" ON sponsorships
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX idx_sponsorships_created_at ON sponsorships(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_sponsorships_email ON sponsorships(email);

-- Insert test data
INSERT INTO contacts (name, email, message)
VALUES 
    ('Test User', 'test@example.com', 'This is a test message')
ON CONFLICT DO NOTHING;

INSERT INTO applications (
    first_name, last_name, email, 
    current_school, grade_level, why_join
)
VALUES (
    'Test', 'Student', 'student@example.com',
    'Test School', 'Grade 10', 'Testing the application system'
)
ON CONFLICT DO NOTHING;

INSERT INTO sponsorships (
    first_name, last_name, email,
    organization, support_type, message
)
VALUES (
    'Test', 'Sponsor', 'sponsor@example.com',
    'Test Corp', 'Financial', 'Testing the sponsorship system'
)
ON CONFLICT DO NOTHING;

