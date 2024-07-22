import React, { useEffect, useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CategoryProps {
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function Category({ category, setCategory }: CategoryProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setCategory(value);
    console.log("test");
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? value : "Select Category..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {category.map((cat) => (
              <CommandList key={cat}>
                <CommandItem
                  value={cat}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {cat}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === cat ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
