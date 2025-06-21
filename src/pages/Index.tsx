
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { DecisionForm } from "@/components/DecisionForm";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleNewDecision = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    toast({
      title: "Decision Submitted",
      description: "Your decision has been recorded successfully.",
    });
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {!showForm ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Decision History Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Track, analyze, and learn from your decision-making process
              </p>
              <Button onClick={handleNewDecision} size="lg">
                Record New Decision
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Track Decisions</CardTitle>
                  <CardDescription>
                    Record important decisions with context and reasoning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Keep a comprehensive log of your decisions to identify patterns and improve future choices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analyze Outcomes</CardTitle>
                  <CardDescription>
                    Review results and learn from past decisions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evaluate the effectiveness of your decisions and understand what factors led to success or failure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Improve Process</CardTitle>
                  <CardDescription>
                    Enhance your decision-making framework
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use insights from your decision history to develop better decision-making strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <DecisionForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        )}
      </div>
    </div>
  );
};

export default Index;
