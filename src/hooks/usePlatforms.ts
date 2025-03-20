import useData from "./useData";

interface Platforn {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platforn>('/platforms/lists/parents');

export default usePlatforms;