-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "subject" VARCHAR(255) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "description" VARCHAR(255) NOT NULL,
    "officeBillingDocument" VARCHAR(14) NOT NULL,
    "protocol" VARCHAR(14) NOT NULL,
    "status" VARCHAR(18) NOT NULL,
    "ventureCode" INTEGER NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);
