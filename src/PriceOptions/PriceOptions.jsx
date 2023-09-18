import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
   const priceOptions = [
    {
      "id": 1,
      "name": "Basic Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access"
      ],
      "price": 30
    },
    {
      "id": 2,
      "name": "Premium Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal trainer sessions"
      ],
      "price": 60
    },
    {
      "id": 3,
      "name": "Ultimate Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal trainer sessions",
        "Sauna and spa access"
      ],
      "price": 90
    },
    {
      "id": 4,
      "name": "24/7 Gym",
      "features": [
        "Access to gym equipment",
        "24/7 access",
        "Locker room access",
        "Group fitness classes"
      ],
      "price": 40
    },
    {
      "id": 5,
      "name": "Fitness Club",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Yoga classes",
        "Dietary consultation"
      ],
      "price": 50
    },
    {
      "id": 6,
      "name": "Family Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Family membership",
        "Swimming pool access"
      ],
      "price": 75
    },
    {
      "id": 7,
      "name": "Student Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Valid student ID required"
      ],
      "price": 25
    },
    {
      "id": 8,
      "name": "Senior Fitness",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Seniors aged 65 and above"
      ],
      "price": 20
    },
    {
      "id": 9,
      "name": "Corporate Fitness",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Corporate group discounts"
      ],
      "price": 55
    },
    {
      "id": 10,
      "name": "CrossFit Gym",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "CrossFit training sessions"
      ],
      "price": 70
    }
  ]
      

    return (
        <div className="m-12">
            <h2 className="text-5xl mb-6">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option = {option}key={option.id}></PriceOption>)
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;