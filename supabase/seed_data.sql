-- Seed Data for site_content table
-- This initializes the site with default values that match the fallback content in the code.

-- 1. Hero Section
INSERT INTO site_content (id, section, content)
VALUES (
  'hero', 
  'home', 
  '{
    "title": "MASTER THE SCIENCE OF SCALE",
    "subtitle": "2024 International Realtor of the Year (NAR)",
    "description": "The world''s most elite entrepreneurs and leaders rely on Anthony Leuterio''s proven frameworks to accelerate growth, maximize impact, and secure their legacy.",
    "cta_text": "Explore Coaching",
    "cta_link": "/coaching",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
  }'::jsonb
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- 2. Introduction Section
INSERT INTO site_content (id, section, content)
VALUES (
  'intro', 
  'home', 
  '{
    "title": "The Architect of Modern Real Estate",
    "subtitle": "Founder of Filipino Homes & Leuterio Realty",
    "bio": "Anthony \"Tonton\" Leuterio is not just an entrepreneur; he is a movement builder. As the founder of the largest real estate ecosystem in the Philippines, he has empowered over 14,000 agents to achieve financial independence.",
    "quote": "My philosophy is simple: God first, then family, then business. When you build with this foundation, success isn''t just a goal—it''s an inevitability.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  }'::jsonb
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- 3. Ecosystem Section
INSERT INTO site_content (id, section, content)
VALUES (
  'ecosystem', 
  'home', 
  '{
    "filipino_homes": { "title": "Filipino Homes", "stat": "14,000+ LICENSED AGENTS", "description": "The largest comprehensive real estate solutions portal in the Philippines, connecting thousands of properties to global buyers." },
    "leuterio_realty": { "title": "Leuterio Realty", "stat": "100+ OFFICES NATIONWIDE", "description": "The country''s fastest-growing real estate brand, recognized globally for excellence in brokerage and consultation." },
    "rent_ph": { "title": "Rent.ph", "stat": "TOP RENTAL PORTAL", "description": "The pioneer digital rental platform in the Philippines, revolutionizing how property management and leasing connect." }
  }'::jsonb
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- 4. Event Section
INSERT INTO site_content (id, section, content)
VALUES (
  'event', 
  'home', 
  '{
    "badge": "Live Intensive",
    "title": "The Edge 2024: Global Summit",
    "date": "November 15-17, 2024",
    "location": "Dubai, UAE",
    "description": "Join Anthony Leuterio and the world''s most elite real estate strategists for a three-day intensive designed to redefine your market position. This is where global legacies are architected.",
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    "cta_text": "Secure Your Seat",
    "cta_link": "/events",
    "availability": "Limited to 100 Elite Delegates",
    "day": "15",
    "month": "Nov 2024"
  }'::jsonb
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- 5. Settings / Branding
INSERT INTO site_content (id, section, content)
VALUES (
  'settings', 
  'global', 
  '{
    "branding": {
      "site_name": "ANTHONY LEUTERIO",
      "tagline": "Master the Science of Scale",
      "logo_text": "AL"
    },
    "contact": {
      "email": "consultation@tonleuterio.com",
      "phone": "+63 (032) 123-4567",
      "address": "Cebu City, Philippines"
    }
  }'::jsonb
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

-- 6. Companies Seeding
INSERT INTO companies (name, location, logo_url, is_top, display_order)
VALUES 
  ('Filipino Homes', 'Philippines', '/assets/companies/filipino-homes.png', true, 1),
  ('Leuterio Realty', 'National', '/assets/companies/leuterio-realty.png', true, 2),
  ('Rent.ph', 'Digital', '/assets/companies/rent-ph.png', true, 3),
  ('ABREP', 'Policy', '/assets/companies/abrep.png', false, 4)
ON CONFLICT DO NOTHING;
