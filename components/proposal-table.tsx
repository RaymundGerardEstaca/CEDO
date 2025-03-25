"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Filter, Search } from "lucide-react"
import { useState } from "react"

// Sample data for proposals
const proposals = [
  {
    id: "PROP-1001",
    title: "Sports Festival",
    organization: "USTP Organization",
    submittedOn: "2023-05-15",
    status: "pending",
    assignedTo: "Rue Mon",
  },
  {
    id: "PROP-1002",
    title: "HIV And Awareness Month",
    organization: "XU Organization",
    submittedOn: "2023-05-12",
    status: "approved",
    assignedTo: "Eva Torres",
  },
  {
    id: "PROP-1003",
    title: "Tech Conference",
    organization: "Lourdes College Organization",
    submittedOn: "2023-05-10",
    status: "rejected",
    assignedTo: "Mike Johnson",
  },
  {
    id: "PROP-1004",
    title: "Marketing Strategy for Local Business ",
    organization: "XU Organization",
    submittedOn: "2023-05-08",
    status: "approved",
    assignedTo: "Khecy Egar",
  },
  {
    id: "PROP-1005",
    title: "KSB",
    organization: "CSO Organization",
    submittedOn: "2023-05-05",
    status: "pending",
    assignedTo: "Robert Brown",
  },
  {
    id: "PROP-1006",
    title: "Clean-Up Drive",
    organization: "Barangay Lapasan Organization",
    submittedOn: "2023-05-03",
    status: "approved",
    assignedTo: "Emily Johnson",
  },
  {
    id: "PROP-1007",
    title: "RISE AI",
    organization: "CSO Organization",
    submittedOn: "2023-05-01",
    status: "pending",
    assignedTo: "David Miller",
  },
]

export function ProposalTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter proposals based on search term and status filter
  const filteredProposals = proposals.filter((proposal) => {
    const matchesSearch =
      proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || proposal.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search proposals..."
            className="pl-8 w-full sm:w-[250px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#f8f9fa]">
              <TableRow>
                <TableHead className="font-semibold text-[#0c2d6b]">Title</TableHead>
                <TableHead className="font-semibold text-[#0c2d6b]">Organization</TableHead>
                <TableHead className="font-semibold text-[#0c2d6b]">Submitted On</TableHead>
                <TableHead className="font-semibold text-[#0c2d6b]">Status</TableHead>
                <TableHead className="font-semibold text-[#0c2d6b]">Assigned To</TableHead>
                <TableHead className="text-right font-semibold text-[#0c2d6b]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProposals.map((proposal) => (
                <TableRow key={proposal.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="border border-[#3b82f6] text-[#3b82f6] px-3 py-1.5 rounded-md text-sm font-medium">
                      {proposal.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="border border-[#3b82f6] text-[#3b82f6] px-3 py-1.5 rounded-md text-sm">
                      {proposal.organization}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="border border-[#3b82f6] text-[#3b82f6] px-3 py-1.5 rounded-md text-sm">
                      {proposal.submittedOn}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        proposal.status === "approved"
                          ? "bg-green-500 hover:bg-green-500"
                          : proposal.status === "pending"
                            ? "bg-amber-500 hover:bg-amber-500"
                            : "bg-red-500 hover:bg-red-500"
                      }
                    >
                      {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="border border-[#3b82f6] text-[#3b82f6] px-3 py-1.5 rounded-md text-sm">
                      {proposal.assignedTo}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredProposals.length}</span> of{" "}
          <span className="font-medium">{proposals.length}</span> proposals
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

