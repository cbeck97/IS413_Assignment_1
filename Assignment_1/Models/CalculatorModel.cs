using System;
using System.ComponentModel.DataAnnotations;

namespace Assignment_1.Models
{
    public class CalculatorModel
    {
        [Range(0,100)]
        public int assignments { get; set; }
        [Range(0, 100)]
        public int group { get; set; }
        [Range(0, 100)]
        public int quiz { get; set; }
        [Range(0, 100)]
        public int exam { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
