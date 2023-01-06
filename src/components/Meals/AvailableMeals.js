import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 20.00,
  },
  {
    id: 'm3',
    name: 'Barbecue ',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Ketoprak',
    description: 'Crunchy...',
    price: 10.99,
  },
  {
    id: 'm5',
    name: 'Soto',
    description: 'Delicious...',
    price: 22.99,
  },
  {
    id: 'm6',
    name: 'BASO',
    description: 'popular food...',
    price: 22.99,
  },
  {
    id: 'm7',
    name: 'MIE AYAM',
    description: 'hmm yummy...',
    price: 30.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
