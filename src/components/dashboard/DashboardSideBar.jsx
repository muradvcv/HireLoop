import { LayoutDashboard, Building2, BriefcaseBusiness, ClipboardList, Settings,CirclePlus } from "lucide-react";

import { Button, Drawer } from "@heroui/react";
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import Link from "next/link";

export function DashboardSideBar() {
  const navItems = [
    { icon: LayoutDashboard, href:"/dashboard/recruiter", label: "Dashboard" },
    { icon: BriefcaseBusiness, href: "/dashboard/recruiter/jobs", label: "All Jobs" },
    { icon: Building2, href: "/dashboard/recruiter/company", label: "My Company" },
    { icon: CirclePlus, href: "/dashboard/recruiter/jobs/new", label: "Post a Job" },
    { icon: ClipboardList, href: "/", label: "Applications" },
    { icon: Settings, href: "/setting", label: "Settings" },
  
  ];
  const navContend = <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
      <Link
        key={item.label}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
        type="button"
        href={item.href}
      >
        <item.icon className="size-5 text-muted" />
        {item.label}
      </Link>
    ))}
  </nav>

  return (
    <>
    
    <aside className="hidden w-64 shrink-0 border-r border-default lg:block">
        <div className="text-4xl font-bold py-2 px-5">Hireloop</div>
      {navContend}
    </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft />
          Sidebar
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
               {navContend}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}