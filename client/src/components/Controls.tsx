import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

interface ControlsProps {
  onShowMovies: () => void;
  onShowUpdateModal: () => void;
  onShowGenres: () => void;
}

export default function Controls({
  onShowMovies,
  onShowUpdateModal,
  onShowGenres,
}: ControlsProps) {
  return (
    <div className="h-auto w-screen flex justify-center py-8">
      <div>
        <Flex gap="small" wrap>
          <Button type="primary" onClick={onShowMovies}>
            List All Movies
          </Button>
          <Button>Add Movie</Button>
          <Button onClick={onShowUpdateModal}>Update Movie</Button>
          <Button>Delete Movie</Button>
          <Button type="primary" onClick={onShowGenres}>
            List All Genres
          </Button>
          <Button>Add Genre</Button>
          <Button>Update Genre</Button>
          <Button>Delete Genre</Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </Flex>
      </div>
    </div>
  );
}
