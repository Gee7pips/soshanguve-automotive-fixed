-- Verify and create contacts table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Verify and create applications table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    date_of_birth DATE,
    gender TEXT,
    address TEXT,
    city TEXT,
    postal_code TEXT,
    current_school TEXT,
    grade_level TEXT,
    program TEXT,
    academic_achievements TEXT,
    extracurricular_activities TEXT,
    why_join TEXT,
    parent_name TEXT,
    parent_email TEXT,
    parent_phone TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Verify and create sponsorships table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.sponsorships (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT,
    area_of_interest TEXT,
    support_type TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsorships ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated access
DO $$
BEGIN
    -- Contacts policies
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contacts' AND policyname = 'Enable insert for all'
    ) THEN
        CREATE POLICY "Enable insert for all" ON public.contacts
            FOR INSERT
            WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contacts' AND policyname = 'Enable select for authenticated users'
    ) THEN
        CREATE POLICY "Enable select for authenticated users" ON public.contacts
            FOR SELECT
            USING (auth.role() = 'authenticated');
    END IF;

    -- Applications policies
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'applications' AND policyname = 'Enable insert for all'
    ) THEN
        CREATE POLICY "Enable insert for all" ON public.applications
            FOR INSERT
            WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'applications' AND policyname = 'Enable select for authenticated users'
    ) THEN
        CREATE POLICY "Enable select for authenticated users" ON public.applications
            FOR SELECT
            USING (auth.role() = 'authenticated');
    END IF;

    -- Sponsorships policies
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'sponsorships' AND policyname = 'Enable insert for all'
    ) THEN
        CREATE POLICY "Enable insert for all" ON public.sponsorships
            FOR INSERT
            WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'sponsorships' AND policyname = 'Enable select for authenticated users'
    ) THEN
        CREATE POLICY "Enable select for authenticated users" ON public.sponsorships
            FOR SELECT
            USING (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sponsorships_created_at ON public.sponsorships(created_at DESC);
