document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', function() {
        return {
            title: 'Perfect Pizza',
            pizzas: [],

            getPizzas() {
                const url = `https://pizza-api.projectcodex.net/api/pizzas`;

                axios.get(url)
                    .then(result => {
                        this.pizzas = result.data.pizzas;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    });
});
