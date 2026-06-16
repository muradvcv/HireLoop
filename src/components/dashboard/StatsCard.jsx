import React from 'react';
import { Card, CardBody } from "@heroui/react";
const StatsCard = ({title,value,icon: Icon}) => {
  return (
    <div>
      <Card className="bg-[#111827] border border-gray-800 shadow-none">
        <CardBody className="p-5">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>

            <div>
              <p className="text-xs text-gray-400">{title}</p>
              <h3 className="text-2xl font-semibold text-white mt-1">
                {value}
              </h3>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatsCard;