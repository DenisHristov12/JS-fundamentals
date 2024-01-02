function vacation(group, groupType, weekDay) {
    let totalPrice = 0;
    let discount = 0;
    
    switch (groupType) {
        case "Students":
            switch (weekDay) {
                case "Friday":
                    totalPrice += group * 8.45;
                    if(group >= 30){
                        discount = totalPrice * (15/100);
                        totalPrice -= discount;
                    }
                    break;
                case "Saturday":
                    totalPrice += group * 9.80;
                    if(group >= 30){
                        discount = totalPrice * (15/100);
                        totalPrice -= discount;
                    }
                    break;
                case "Sunday":
                    totalPrice += group * 10.46;
                    if(group >= 30){
                        discount = totalPrice * (15/100);
                        totalPrice -= discount;
                    }
                    break;
                default:
                    break;
            }
            break;
        case "Business":
            switch (weekDay) {
                case "Friday":
                    totalPrice += group * 10.90;
                    if(group >= 100){
                        totalPrice = (group-10) * 10.90;
                    }
                    break;
                case "Saturday":
                    totalPrice += group * 15.60;
                    if(group >= 100){
                        totalPrice = (group-10) * 15.60;
                    }
                    break;
                case "Sunday":
                    totalPrice += group * 16;
                    if(group >= 100){
                        totalPrice = (group-10) * 16;
                    }
                    break;
                default:
                    break;
            }
            break;
        case "Regular":
            switch (weekDay) {
                case "Friday":
                    totalPrice += group * 15;
                    if(group >= 10 && group <= 20){
                        discount = totalPrice * (5/100);
                        totalPrice -= discount;
                    }
                    break;
                case "Saturday":
                    totalPrice += group * 20;
                    if(group >= 10 && group <= 20){
                        discount = totalPrice * (5/100);
                        totalPrice -= discount;
                    }
                    break;
                case "Sunday":
                    totalPrice += group * 22.50;
                    if(group >= 10 && group <= 20){
                        discount = totalPrice * (5/100);
                        totalPrice -= discount;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:

            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,"Students","Sunday");