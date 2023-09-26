import { PageLayout } from "../components";
import { CategoryList } from "../components/feature/category";
import { ProductList } from "../components/feature/products";

const MainPage = () => {
  return (
    <PageLayout>
      <CategoryList />
      <ProductList />
    </PageLayout>
  );
};

export default MainPage;
