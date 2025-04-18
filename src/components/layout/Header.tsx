
import React from 'react';
import { Bell, Settings } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddTransactionForm from "../transactions/AddTransactionForm";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between bg-white shadow-sm rounded-lg mb-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="finance-text-gradient">Wealth</span>Well
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                2
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New budget alert: Food & Dining</DropdownMenuItem>
            <DropdownMenuItem>Weekly summary ready</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <AddTransactionForm />
      </div>
    </header>
  );
};

export default Header;
