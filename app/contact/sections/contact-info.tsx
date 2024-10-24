import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="space-y-2">
        <p className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-primary" /> 123 Financial
          District, City Center
        </p>
        <p className="flex items-center">
          <Phone className="mr-2 h-5 w-5 text-primary" /> +1 (555) 123-4567
        </p>
        <p className="flex items-center">
          <Mail className="mr-2 h-5 w-5 text-primary" /> info@carabaocapital.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
