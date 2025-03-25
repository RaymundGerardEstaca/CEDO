"use client"
import { ProposalTable } from "@/components/proposal-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProposalsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0c2d6b]">Proposals</h1>
        <p className="text-muted-foreground">View and manage all your submitted proposals</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#0c2d6b] text-xl">Proposal Management</CardTitle>
          <CardDescription>Track the status of your proposals and view feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Proposals</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <ProposalTable />
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <ProposalTable />
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              <ProposalTable />
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              <ProposalTable />
            </TabsContent>

            <TabsContent value="drafts" className="space-y-4">
              <ProposalTable />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

