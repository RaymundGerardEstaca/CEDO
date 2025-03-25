"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BarChart3, Bell, Calendar, CheckSquare, FileText, LogOut, Settings, Upload, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function AppSidebar() {
  const pathname = usePathname()
  const [userRole] = useState("admin") // This would come from auth context in a real app

  const isActive = (path: string) => pathname === path

  const menuItems = [
    {
      title: "Dashboard",
      icon: BarChart3,
      href: "/",
      roles: ["student", "admin", "reviewer"],
    },
    {
      title: "Proposals",
      icon: FileText,
      href: "/proposals",
      roles: ["student", "admin", "reviewer"],
    },
    {
      title: "Submit Proposal",
      icon: Upload,
      href: "/proposals/new",
      roles: ["student"],
    },
    {
      title: "Review Proposals",
      icon: CheckSquare,
      href: "/review",
      roles: ["admin", "reviewer"],
    },
    {
      title: "Event Tracking",
      icon: Calendar,
      href: "/events",
      roles: ["student", "admin", "reviewer"],
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/notifications",
      roles: ["student", "admin", "reviewer"],
    },
    {
      title: "User Management",
      icon: Users,
      href: "/users",
      roles: ["admin"],
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      roles: ["student", "admin", "reviewer"],
    },
  ]

  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter((item) => item.roles.includes(userRole))

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b py-4">
        <div className="flex items-center px-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#0c2d6b]">
            <img src="/logo.png" alt="CSO Logo" className="h-full w-full object-contain p-1" />
          </div>
          <div className="ml-2">
            <h1 className="text-lg font-bold text-[#0c2d6b]">ProposeConnect</h1>
            <p className="text-xs text-muted-foreground">City Scholarships Office</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {filteredMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                className="text-[#f0c14b] hover:bg-[#0c2d6b]/80 hover:text-[#f0c14b] data-[active=true]:bg-[#0c2d6b]/90 data-[active=true]:text-[#f0c14b]"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-[#0c2d6b] text-white">JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">Rue Enopia</span>
                <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

