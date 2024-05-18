import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import SelectLink from "components/SelectLink/SelectLink";
import { PageMainContent } from "components/Page";

interface SortableLinkElementProps {
  id: number;
  index: number;
  remove: <T = any>(index: number) => T | undefined;
}
const SortableLinkSelect: FC<SortableLinkElementProps> = ({
  id,
  remove,
  index,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id + 1 });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <PageMainContent animate={{ opacity: [0, 1] }}>
        <SelectLink index={index} remove={remove} listeners={listeners} />
      </PageMainContent>
    </div>
  );
};

export default SortableLinkSelect;
