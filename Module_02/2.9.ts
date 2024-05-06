{
      type sheikh={
        bike:string,
        ship:string
      }

      type hasBike<T> = T extends keyof sheikh ? true : false;

      type bike = hasBike<"bike">
}