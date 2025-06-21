
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";

const AdminApplications = () => {
  const applications = [
    {
      id: 1,
      title: "Budget Allocation for Q4",
      category: "Business",
      priority: "High",
      status: "Active",
      submittedBy: "John Doe",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Technology Stack Migration",
      category: "Technical",
      priority: "Critical",
      status: "Under Review",
      submittedBy: "Jane Smith",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "Marketing Campaign Strategy",
      category: "Strategic",
      priority: "Medium",
      status: "Approved",
      submittedBy: "Mike Johnson",
      date: "2024-01-13"
    },
    {
      id: 4,
      title: "Office Relocation Decision",
      category: "Operational",
      priority: "Low",
      status: "Pending",
      submittedBy: "Sarah Wilson",
      date: "2024-01-12"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Applications</h1>
            <p className="text-muted-foreground">
              Manage and review decision applications
            </p>
          </div>

          <div className="grid gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{app.title}</CardTitle>
                      <CardDescription>
                        Submitted by {app.submittedBy} on {app.date}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getPriorityColor(app.priority)}>
                        {app.priority}
                      </Badge>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        Category: <span className="font-medium">{app.category}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
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

export default AdminApplications;
