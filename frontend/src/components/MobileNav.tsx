import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import { MobileNavLinks } from './MobileNavLinks';

const MobileNav = () => {
    const { isAuthenticated, logWithRedirect, user } = useAuth0;

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-blue-500" />
                            {user?.email}
                        </span>
                    ) : (
                        <span>Welcome to Foodio.com!</span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    {isAuthenticated ? (
                        <MobileNavLinks />
                    ) : (
                        <Button className="flex-1  font-bold bg-blue-500">
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
