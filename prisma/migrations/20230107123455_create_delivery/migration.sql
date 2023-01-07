-- CreateTable
CREATE TABLE "delivery" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "deliveryman_id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
