"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { login } from "@/services/user-service";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [state, formAction, isPending] = useActionState(login, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: (state?.messages + ".") as string,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }, [state, toast]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username & password below to login to your admin account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" type="text" placeholder="adlofhitler" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
