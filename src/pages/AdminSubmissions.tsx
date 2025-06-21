
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, Edit, CheckCircle, XCircle } from "lucide-react";

const AdminSubmissions = () => {
  const submissions = [
    {
      id: 1,
      title: "Product Launch Timeline",
      category: "Strategic",
      priority: "High",
      status: "Submitted",
      submittedBy: "Alice Brown",
      date: "2024-01-16"
    },
    {
      id: 2,
      title: "Team Restructuring Plan",
      category: "Operational",
      priority: "Critical",
      status: "In Review",
      submittedBy: "Bob Davis",
      date: "2024-01-15"
    },
    {
      id: 3,
      title: "Security Protocol Update",
      category: "Technical",
      priority: "High",
      status: "Approved",
      submittedBy: "Carol White",
      date: "2024-01-14"
    },
    {
      id: 4,
      title: "Vendor Selection Process",
      category: "Business",
      priority: "Medium",
      status: "Rejected",
      submittedBy: "David Green",
      date: "2024-01-13"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted": return "bg-blue-100 text-blue-800";
      case "In Review": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Rejected": return "bg-red-100 text-red-800";
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
            <h1 className="text-3xl font-bold tracking-tight mb-2">Submissions</h1>
            <p className="text-muted-foreground">
              Review and manage decision submissions
            </p>
          </div>

          <div className="grid gap-6">
            {submissions.map((submission) => (
              <Card key={submission.id} className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{submission.title}</CardTitle>
                      <CardDescription>
                        Submitted by {submission.submittedBy} on {submission.date}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getPriorityColor(submission.priority)}>
                        {submission.priority}
                      </Badge>
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        Category: <span className="font-medium">{submission.category}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {submission.status === "Submitted" && (
                        <>
                          <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
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

export default AdminSubmissions;
