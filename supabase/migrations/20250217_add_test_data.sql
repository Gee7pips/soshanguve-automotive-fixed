-- Insert test contact
INSERT INTO public.contacts (name, email, message)
VALUES ('Test User', 'test@example.com', 'This is a test message')
ON CONFLICT DO NOTHING;

-- Insert test application
INSERT INTO public.applications (
    first_name, last_name, email, phone, 
    current_school, grade_level, why_join
)
VALUES (
    'Test', 'Student', 'student@example.com', '1234567890',
    'Test School', 'Grade 10', 'Testing the application system'
)
ON CONFLICT DO NOTHING;

-- Insert test sponsorship
INSERT INTO public.sponsorships (
    first_name, last_name, email, 
    organization, support_type, message
)
VALUES (
    'Test', 'Sponsor', 'sponsor@example.com',
    'Test Corp', 'Financial', 'Testing the sponsorship system'
)
ON CONFLICT DO NOTHING;

