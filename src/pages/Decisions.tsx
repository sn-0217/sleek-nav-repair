
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, User } from "lucide-react";

const Decisions = () => {
  const decisions = [
    {
      id: 1,
      title: "Implement Remote Work Policy",
      description: "Decision to allow permanent remote work options for all employees",
      category: "Operational",
      priority: "High",
      date: "2024-01-15",
      author: "HR Team",
      status: "Implemented"
    },
    {
      id: 2,
      title: "Adopt Cloud Infrastructure",
      description: "Migration from on-premise servers to cloud-based infrastructure",
      category: "Technical",
      priority: "Critical",
      date: "2024-01-10",
      author: "IT Department",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Launch New Product Line",
      description: "Decision to launch eco-friendly product variants",
      category: "Strategic",
      priority: "High",
      date: "2024-01-05",
      author: "Product Team",
      status: "Planning"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Implemented": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Decision History</h1>
            <p className="text-muted-foreground">
              Browse through all recorded decisions and their outcomes
            </p>
          </div>

          <div className="grid gap-6">
            {decisions.map((decision) => (
              <Card key={decision.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl">{decision.title}</CardTitle>
                      <CardDescription className="text-base">
                        {decision.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <Badge className={getPriorityColor(decision.priority)}>
                        {decision.priority}
                      </Badge>
                      <Badge className={getStatusColor(decision.status)}>
                        {decision.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{decision.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{decision.author}</span>
                      </div>
                      <div>
                        <span className="font-medium">{decision.category}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decisions;
