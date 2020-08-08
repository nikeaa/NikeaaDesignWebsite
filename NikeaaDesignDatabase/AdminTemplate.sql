CREATE TABLE [dbo].[AdminTemplate]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Title] VARCHAR(50) NOT NULL, 
    [IsActive] BIT NOT NULL
)
