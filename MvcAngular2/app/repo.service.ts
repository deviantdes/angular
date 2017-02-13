export class Repo
{
    Drinks: String[] = ["Tea","Milk","Coffee"];

    getDrinks()
    {
        return this.Drinks[Math.floor(Math.random() * this.Drinks.length)];
    }

    addDrinks(val)
    {
        this.Drinks.push(val);
    }
}