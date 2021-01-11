using System;
using Core.Entities;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public String Name { get; set; } 
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public String ProductType { get; set; }
        public String ProductBrand { get; set; }
    }
}