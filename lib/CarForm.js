export default function CarForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData), 
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log(result)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>make</h2>
            <input name="make" type="text"/>
            <h2>model</h2>
            <input name="model" type="text"/>
            <h2>image</h2>
            <input name="image" type="text"/>
            <h2>description</h2>
            <textarea name="description" type="text"/>

            <button type="submit">Create Car</button>
        </form>
    )
}