import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee


    const handleUpdateCoffee = event => {
        event.preventDefault()


        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee);


        // send data to the server

        fetch(`https://old-coffee-store-server-rho.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Great job!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-28">
            <h2 className="text-3xl font-extrabold text-center mb-20">
                Update a Coffee : {name}
            </h2>
            <form onSubmit={handleUpdateCoffee}>

                {/*name & quantity  */}
                <div className=" md:flex gap-4 mb-4">
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span>Coffee Name</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="name" defaultValue={name} placeholder="Coffee Name" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span>Available Quantity</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" />
                    </div>
                </div>


                {/*Supplier & Taste  */}
                <div className=" md:flex gap-4 mb-4">
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span>Supplier</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span>Taste</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="taste" defaultValue={taste} placeholder="Taste" />
                    </div>
                </div>



                {/*Category & Details*/}
                <div className=" md:flex gap-4 mb-4">
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span>Category</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="category" defaultValue={category} placeholder="Category" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label font-semibold">
                            <span> Details</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="details" defaultValue={details} placeholder=" Details" />
                    </div>
                </div>



                {/*Photo*/}
                <div className="gap-4 mb-4">
                    <div className="w-full">
                        <label className="label font-semibold">
                            <span>Photo URL</span>
                        </label>
                        <input className="input input-bordered w-full" type="text" name="photo" defaultValue={photo} placeholder="Photo URL" />
                    </div>
                </div>

                {/* button */}

                <input className="btn btn-block bg-yellow-950 text-white" type="submit" value="Update Coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffee;