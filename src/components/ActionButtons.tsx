import { Button } from "@/components/ui/button";
import { Play, Square, Upload, Download, FileText } from "lucide-react";
import { useState } from "react";

export function ActionButtons() {
  const [isRunning, setIsRunning] = useState(false);

  const toggleAnalysis = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex gap-2">
      <Button 
        className={`w-40 ${isRunning ? "bg-red-500 hover:bg-red-600" : "bg-mint-500 hover:bg-mint-600"}`}
        onClick={toggleAnalysis}
      >
        {isRunning ? (
          <>
            <Square className="fill-white h-4 w-4" />
            Stop
          </>
        ) : (
          <>
            <Play className="fill-white h-4 w-4" />
            Start Analysis
          </>
        )}
      </Button>
      <Button variant="outline">
        <Upload className="mr-2 h-4 w-4" />
        Import
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
      <Button variant="outline">
        <FileText className="mr-2 h-4 w-4" />
        Open Results
      </Button>
    </div>
  );
}
