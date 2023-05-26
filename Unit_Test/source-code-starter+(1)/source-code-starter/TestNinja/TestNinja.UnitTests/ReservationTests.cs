using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TestNinja.Fundamentals;

namespace TestNinja.UnitTests
{
    [TestClass]
    public class ReservationTests
    {
        [TestMethod]
        public void CanBeCancelledBy_UserIsAdmin_ReturnsTrue()
        {
            //Arrange
            var reservation = new Reservations();

            //Act
            var result = reservation.CanBeCancelledBy(new User { IsAdmin = true });

            //Assert
            Assert.IsTrue(result);
        }

        public void CanBeCancelledBy_SameUserCancellingTheReservation_ReturnTrue
        {
            var user = new User();
        var reservation = new Reservation { MadeBy = user };
        
        }
    }
}
