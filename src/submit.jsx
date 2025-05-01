// File: src/pages/Submit.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SubmitPage() {
  const [language, setLanguage] = useState("fr");
  const [form, setForm] = useState({
    text: "",
    author: "",
    country: "",
    language: "fr",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageToggle = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
    setForm((prev) => ({ ...prev, language: newLang }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé:", form);
    // Ici on connectera à Supabase ensuite
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center text-violet-400">
        {language === "fr" ? "Soumettre un message" : "Submit a message"}
      </h1>

      <button
        onClick={handleLanguageToggle}
        className="mb-6 text-sm text-violet-300 underline"
      >
        {language === "fr" ? "Passer en anglais" : "Switch to French"}
      </button>

      <Card className="bg-gradient-to-b from-gray-900 to-gray-800 w-full max-w-xl">
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <Input
              name="text"
              value={form.text}
              onChange={handleChange}
              placeholder={
                language === "fr"
                  ? "Écris ton Dernier Mot..."
                  : "Write your Last Words..."
              }
            />
            <Input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder={language === "fr" ? "Ton prénom" : "Your name"}
            />
            <Input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder={language === "fr" ? "Ton pays" : "Your country"}
            />
            <Button type="submit" className="w-full mt-4">
              {language === "fr" ? "Envoyer mon message" : "Submit my message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
