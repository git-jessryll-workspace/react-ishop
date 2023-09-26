import { PageLayout } from "../components";
import { CategoryList } from "../components/feature/category";
import { ProductList } from "../components/feature/products";

const MainPage = () => {
  return (
    <PageLayout>
      <ProductList />
      <CategoryList />
    </PageLayout>
  );
};

export default MainPage;
