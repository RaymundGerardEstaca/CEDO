import { DashboardStats } from "@/components/dashboard-stats"
import { ProposalTable } from "@/components/proposal-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingEvents } from "@/components/upcoming-events"
import { BarChart, CheckCircle2, Clock, FileText, XCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-[#0c2d6b]">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last updated: Today, 2:30 PM</span>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#0c2d6b] data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-[#0c2d6b] data-[state=active]:text-white">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-[#0c2d6b] data-[state=active]:text-white">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardStats
              title="Total Proposals"
              value="128"
              description="+6% from last month"
              icon={<FileText className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Pending Review"
              value="23"
              description="5 new since yesterday"
              icon={<Clock className="h-4 w-4 text-amber-500" />}
            />
            <DashboardStats
              title="Approved"
              value="86"
              description="72% approval rate"
              icon={<CheckCircle2 className="h-4 w-4 text-green-500" />}
            />
            <DashboardStats
              title="Rejected"
              value="19"
              description="Requires feedback"
              icon={<XCircle className="h-4 w-4 text-red-500" />}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#0c2d6b] text-xl">Proposal Activity</CardTitle>
                <CardDescription>Proposal submissions and approvals over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-muted">Activity chart will appear here</span>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3 border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#0c2d6b] text-xl">Upcoming Events</CardTitle>
                <CardDescription>Events scheduled for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingEvents />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <Card className="border shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-[#0c2d6b] text-xl">Recent Proposals</CardTitle>
                  <CardDescription>Latest proposal submissions and their status</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <ProposalTable />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#0c2d6b] text-xl">Analytics</CardTitle>
              <CardDescription>Detailed analytics and metrics for all proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <span className="text-muted">Analytics content will appear here</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#0c2d6b] text-xl">Reports</CardTitle>
              <CardDescription>Generate and export reports for administrative review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <span className="text-muted">Reports content will appear here</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

