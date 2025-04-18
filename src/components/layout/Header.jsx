
import React from 'react';
import { Bell, Settings, Wallet2 } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddTransactionForm from "../transactions/AddTransactionForm";

const Header = () => {
  return (
    <header className="py-6 px-8 flex items-center justify-between bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm shadow-lg rounded-xl mb-6 border border-white/20">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <Wallet2 className="h-6 w-6 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold">
          My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transaction</span>
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative bg-white/50 hover:bg-white/80">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center animate-pulse">
                2
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuItem className="py-3">
              <div className="flex flex-col">
                <span className="font-medium">New budget alert</span>
                <span className="text-xs text-muted-foreground">Food & Dining category limit reached</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3">
              <div className="flex flex-col">
                <span className="font-medium">Weekly summary</span>
                <span className="text-xs text-muted-foreground">Your spending report is ready</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white/50 hover:bg-white/80">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="py-2">
              <div className="flex items-center space-x-2">Account Settings</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2">
              <div className="flex items-center space-x-2">Preferences</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2">
              <div className="flex items-center space-x-2">Help & Support</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <AddTransactionForm />
      </div>
    </header>
  );
};

export default Header;
