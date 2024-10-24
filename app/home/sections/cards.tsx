import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Building } from "lucide-react";
import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="container -top-32 mx-auto grid gap-4 p-8 md:grid-cols-3 lg:-translate-y-24 lg:gap-20 xl:-translate-y-20 xl:p-0">
      <Card className="border-2 border-primary bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col justify-center gap-4 text-center md:items-center">
            <div className="flex items-center gap-4 md:flex-col">
              <BarChart3 className="h-8 w-8 text-primary md:h-14 md:w-14" />
              <h3 className="text-xl font-semibold">Strategic Investments</h3>
            </div>

            <p className="text-gray-600">
              Identifying and capitalizing on high-potential opportunities.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-primary bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col justify-center gap-4 text-center md:items-center">
            <div className="flex items-center gap-4 md:flex-col">
              <Users className="h-8 w-8 text-primary md:h-14 md:w-14" />
              <h3 className="text-xl font-semibold">Expert Team</h3>
            </div>
            <p className="text-gray-600">
              Seasoned professionals with deep industry insights.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-primary bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col justify-center gap-4 text-center md:items-center">
            <div className="flex items-center gap-4 md:flex-col">
              <Building className="h-8 w-8 text-primary md:h-14 md:w-14" />
              <h3 className="text-xl font-semibold">Diverse Portfolio</h3>
            </div>
            <p className="text-gray-600">
              Balanced investments across multiple sectors for optimal returns.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
