
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [symptom, setSymptom] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!symptom.trim()) return;
    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setAdvice("Based on your input, we recommend you see a GP within 24 hours. If symptoms worsen, seek urgent care.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">AI Medical Assistant for Travellers</h1>
      <Card className="w-full max-w-xl">
        <CardContent className="p-4 space-y-4">
          <p className="text-lg">Describe your symptoms:</p>
          <Textarea
            placeholder="e.g. I have stomach pain and feel nauseous."
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            rows={4}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Analyzing..." : "Get Advice"}
          </Button>
          {advice && (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <p className="font-semibold">AI Medical Advice:</p>
              <p>{advice}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
