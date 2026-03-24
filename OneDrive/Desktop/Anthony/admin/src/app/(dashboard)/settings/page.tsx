"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { Save, Loader2, Globe, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    const { data } = await supabase
      .from("site_content")
      .select("*")
      .eq("id", "settings")
      .single();
    
    if (data) {
      setSettings(data.content);
    } else {
      // Create default settings if not exists
      const defaultSettings = {
        branding: {
          site_name: "Anthony Leuterio",
          site_description: "Master the Science of Scale",
          logo_url: ""
        },
        contact: {
          email: "support@antonioleuterio.com",
          phone: "+63 912 345 6789",
          address: "Cebu City, Philippines"
        },
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
          youtube: "https://youtube.com"
        }
      };
      setSettings(defaultSettings);
    }
    setLoading(false);
  }

  const handleUpdate = (category: string, key: string, value: string) => {
    setSettings((prev: any) => ({
      ...prev,
      [category]: { ...prev[category], [key]: value }
    }));
  };

  const saveSettings = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert({ id: "settings", section: "Global Settings", content: settings });
    
    if (error) alert(error.message);
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-slate-900" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 mt-1">Global configuration and branding for your website</p>
        </div>
        <button
          onClick={saveSettings}
          disabled={saving}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>

      <div className="grid gap-6">
        {/* Branding Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <Globe className="h-5 w-5 text-slate-400" />
            <h2 className="font-semibold text-slate-900">Branding & SEO</h2>
          </div>
          <div className="grid gap-4 sm:grid-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Site Name</label>
              <input
                type="text"
                value={settings.branding.site_name}
                onChange={(e) => handleUpdate("branding", "site_name", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Site Description</label>
              <input
                type="text"
                value={settings.branding.site_description}
                onChange={(e) => handleUpdate("branding", "site_description", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>

        {/* Contact info Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <Mail className="h-5 w-5 text-slate-400" />
            <h2 className="font-semibold text-slate-900">Contact Information</h2>
          </div>
          <div className="grid gap-4 sm:grid-3">
             <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><Mail className="h-3 w-3" /> Email</label>
                <input
                  type="email"
                  value={settings.contact.email}
                  onChange={(e) => handleUpdate("contact", "email", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
             </div>
             <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><Phone className="h-3 w-3" /> Phone</label>
                <input
                  type="text"
                  value={settings.contact.phone}
                  onChange={(e) => handleUpdate("contact", "phone", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
             </div>
             <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><MapPin className="h-3 w-3" /> Address</label>
                <input
                  type="text"
                  value={settings.contact.address}
                  onChange={(e) => handleUpdate("contact", "address", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
             </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <Linkedin className="h-5 w-5 text-slate-400" />
            <h2 className="font-semibold text-slate-900">Social Media</h2>
          </div>
          <div className="grid gap-4 sm:grid-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><Facebook className="h-3 w-3" /> Facebook</label>
              <input
                type="text"
                value={settings.social.facebook}
                onChange={(e) => handleUpdate("social", "facebook", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><Instagram className="h-3 w-3" /> Instagram</label>
              <input
                type="text"
                value={settings.social.instagram}
                onChange={(e) => handleUpdate("social", "instagram", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase"><Linkedin className="h-3 w-3" /> LinkedIn</label>
              <input
                type="text"
                value={settings.social.linkedin}
                onChange={(e) => handleUpdate("social", "linkedin", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
