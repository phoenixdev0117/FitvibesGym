'use client';

interface ButtonProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    }
}


export default   function Button({ product }: ButtonProps) {

    
  const handleOnclick = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product
      ),
    })

    const data = await res.json();
    window.location.href = data.url;
    
  };

    return (
        <button onClick={handleOnclick} className="bg-blue-500 text-white p-2 rounded-lg">
            Pagar
        </button>
    )
}