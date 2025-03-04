import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingPage from "./../../components/Loading/LoadingPage";

async function MealsData() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our community.",
};

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself, it is easy and fun!{" "}
        </p>
        <p className={classes.cta}>
          {" "}
          <Link href={"/meals/share"}>Share your favorite recipe</Link>{" "}
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingPage />}>
          <MealsData />
        </Suspense>
      </main>
    </>
  );
}
