import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

  const subTotalPrice = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
  const tipAmount = useMemo(() => subTotalPrice * tip, [tip, subTotalPrice]);
  const total = useMemo(() => subTotalPrice + tipAmount, [subTotalPrice, tipAmount]);

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>
                Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalPrice)}</span>
            </p>

            <p>
                Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>
                Total a pagar: {''}
                <span className="font-bold">{formatCurrency(total)}</span>
            </p>

        </div>

        <button 
            className="w-full bg-black text-white p-3 uppercase mt-10 transition-all hover:bg-teal-950 disabled:opacity-5"
            disabled={total === 0}
            onClick={() => placeOrder()}
        >
            Guardar
        </button>
    </>
  )
}
