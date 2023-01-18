export class ResDto {
  isSuccess: boolean;
  statusCode: number;
  message: string;


  goodResponse(message: string) {
    this.isSuccess = true;
    this.statusCode = 200;
    this.message = message;

    
  }
}