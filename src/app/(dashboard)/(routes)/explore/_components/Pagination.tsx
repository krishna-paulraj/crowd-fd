import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const PaginationCompnent = () => {
  return (
    <Pagination className="py-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-black hover:bg-[#27272A] hover:text-white"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-black hover:bg-[#27272A] hover:text-white"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="bg-black hover:bg-[#27272A] hover:text-white"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-black hover:bg-[#27272A] hover:text-white"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-black hover:bg-[#27272A] hover:text-white"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
