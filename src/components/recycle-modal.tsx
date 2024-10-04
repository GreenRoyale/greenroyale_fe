"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlusIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { SelectComp } from "./select-comp";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface MaterialType {
  label: string;
  value: string;
}

interface RecycleMaterial {
  id: number;
  type: string;
  quantity: number;
  weight: number;
}

const RecycleModal: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = React.useState("");
  const materialType = [
    { label: "Plastic", value: "plastic" },
    { label: "Can", value: "can" },
    { label: "Metal", value: "metal" },
    {
      label: "Elecronics (E-waste) Phones, Laptops, Light Bulbs",
      value: "elecrical",
    },
    { label: "Textile Cotton, Polyester", value: "cotton" },
    { label: "Wood", value: "wood" },
    { label: "Organic Waste: Food Scraps, Yard Waste", value: "organic" },
    { label: "Rubber Tires", value: "rubber" },
  ];
  const [error, setError] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [materials, setMaterials] = React.useState<RecycleMaterial[]>([]);

  const handleAdd = (e: any) => {
    e.preventDefault();
    setError("");
    if (!selectedMaterial || !quantity || !weight) {
      setError("Please fill in all fields");
      return;
    }
    const quantityNum = parseFloat(quantity);
    const weightNum = parseFloat(weight);

    if (quantityNum <= 0 || weightNum <= 0) {
      setError("Quantity and weight must be greater than 0");
      return;
    }
    const newMaterial: RecycleMaterial = {
      id: Date.now(),
      type: selectedMaterial,
      quantity: parseInt(quantity),
      weight: parseFloat(weight),
    };
    setMaterials([...materials, newMaterial]);

    // Reset form
    setSelectedMaterial("");
    setQuantity("");
    setWeight("");
  };

  const handleRemove = (id: number): void => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  const handleLogRecycle = async (): Promise<void> => {
    if (materials.length === 0) {
      setError("Please add at least one material before logging");
      return;
    }

    try {
      console.log("Logging materials:", materials);
      setMaterials([]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-md border border-white bg-[#6FAE4D] flex items-center text-white gap-4 text-base w-fit h-[44px] px-[37px]">
          <CirclePlusIcon />
          <span>Add New</span>
        </Button>
      </DialogTrigger>
      <div>
        <DialogContent className="w-[600px] min-w-[600px]">
          <DialogHeader className="mb-5">
            <DialogTitle>
              <div className="flex items-center justify-between">
                <h3 className="text-[#9095A0] font-semibold">
                  Recycle / Log Recycle
                </h3>
                {/* <XCircleIcon  /> */}
              </div>
            </DialogTitle>
          </DialogHeader>

          <section>
            <h1 className="font-semibold text-2xl mb-8">Log your recycles</h1>
            <form
              action=""
              className="space-y-8 text-base"
              onSubmit={handleAdd}
            >
              <div>
                <Label htmlFor="materialType" className="text-base">
                  Material Type
                </Label>
                <SelectComp
                  label="Material Type"
                  items={materialType}
                  setSelectedValue={setSelectedMaterial}
                  placeholder="Select a material"
                  selectedValue={selectedMaterial}
                />
              </div>

              <div>
                <Label htmlFor="quantity" className="text-base">
                  Quantity
                </Label>
                <Input
                  type="number"
                  className="h-12"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="weight" className="text-base">
                  How much do you think it weighs? (KG)
                </Label>
                <Input
                  type="number"
                  className="h-12"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <Button type="submit" className="bg-[#6FAE4D] text-white h-12">
                <PlusCircleIcon className="mr-3" />
                Add
              </Button>
            </form>

            {materials.length > 0 && (
              <div className="mt-8">
                <h2 className="font-semibold mb-4">Added Materials:</h2>
                <div className="space-y-4">
                  {materials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-md"
                    >
                      <div>
                        <p className="font-medium">{material.type}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {material.quantity} | Weight:{" "}
                          {material.weight}kg
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => handleRemove(material.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2Icon size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="py-10">
              <Button
                className="bg-[#6FAE4D] text-white h-12 w-full"
                onClick={handleLogRecycle}
              >
                Log Recycle
              </Button>
            </div>
          </section>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default RecycleModal;
