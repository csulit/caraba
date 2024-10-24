import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-semibold text-primary">
            Name
          </Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-primary">
            Email
          </Label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="font-semibold text-primary">
            Message
          </Label>
          <Textarea id="message" placeholder="Your message" />
        </div>
        <Button
          type="submit"
          className="bg-primary text-white hover:bg-primary-dark"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
