import { MapPin, Mail } from "lucide-react";
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="space-y-4">
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div className="flex flex-col gap-2">
            <span>Charles Court Main Street</span>
            <span>P.O. Box 4406 Tortola, VG1110, BVI</span>
          </div>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" /> hello@carabao.capital
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
