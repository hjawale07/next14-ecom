export interface simplifiedProduct {
     _id: string;
     imageUrl: string;
     price: number;
     slug: string;
     categoryName: string;
     name: string; 
}

export interface fullProduct {
     image: any;
     _id: string;
     images: any;
     price: number;
     slug: string;
     categoryName: string;
     name: string;
     description: string;
}