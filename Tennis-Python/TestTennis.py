import unittest
from Tennis import Player, ZERO, FIFTEEN, THIRTY, FORTY, ADV, WIN, Match, Play
import random

class TestBase(unittest.TestCase):
	def createPlayers(self, scoreA = ZERO, scoreB = ZERO):
		self.playerA = Player(scoreA)
		self.playerB = Player(scoreB)

class TestPlayer(TestBase):
	
	def winPoint(self):
		self.playerA.winPoint(self.playerB)

	def test_initialScore(self):
		self.createPlayers()
		self.assertEqual(ZERO, self.playerA.getScore())

	def test_firstPoint(self):
		self.createPlayers()
		self.winPoint()
		self.assertEqual(FIFTEEN, self.playerA.getScore())

	def test_secondPoint(self):
		self.createPlayers(scoreA=FIFTEEN)
		self.winPoint()
		self.assertEqual(THIRTY, self.playerA.getScore())

	def test_thirdPoint(self):
		self.createPlayers(scoreA=THIRTY)
		self.winPoint()
		self.assertEqual(FORTY, self.playerA.getScore())
	
	def test_playerOnDeuceScroresandWinAdvantage(self):
		self.createPlayers(FORTY, FORTY)
		self.winPoint()
		self.assertEqual(ADV, self.playerA.getScore())

	def test_playerScoresAndOtherPlayerLosesAdvantage(self):
		self.createPlayers(ADV, FORTY)
		self.playerB.winPoint(self.playerA)
		self.assertEqual(FORTY, self.playerA.getScore())
		self.assertEqual(FORTY, self.playerB.getScore())

	def test_playerWithAdvantageScoresAndWin(self):
		self.createPlayers(ADV, FORTY)
		self.winPoint()

		self.assertEqual(WIN, self.playerA.getScore())

	def test_playerIsNotAWinner(self):
		self.createPlayers()
	
		self.assertFalse(self.playerA.isWinner())
	
	def test_playerWins(self):
		self.createPlayers(ZERO, FORTY)
		self.playerB.winPoint(self.playerA)
		
		self.assertTrue(self.playerB.isWinner())


##
class TestMatch(TestBase):
	def test_playMatchAndPlayerAWins(self):
		self.createPlayers(ZERO, ZERO)
	
		self.match = Match()
		self.match.playMatch(self.playerA, self.playerB, Play("A"))

		self.assertTrue(self.playerA.isWinner())
		self.assertTrue(self.playerB.hasNoPoints())

	def test_playMatchAndPlayerBWins(self):
		self.createPlayers(ZERO, ZERO)
	
		self.match = Match()
		self.match.playMatch(self.playerA, self.playerB, Play("B"))

		self.assertTrue(self.playerB.isWinner())
		self.assertTrue(self.playerA.hasNoPoints())

	def test_randomTesting(self):
		self.createPlayers(ZERO, ZERO)
	
		r = RandomPlay()
		self.match = Match()
		self.match.playMatch(self.playerA, self.playerB, r)

		if r.getMostScoredPlayer() == "B":
			self.assertTrue(self.playerB.isWinner())
			self.assertFalse(self.playerA.isWinner())
		else:
			self.assertTrue(self.playerA.isWinner())
			self.assertFalse(self.playerB.isWinner())

	# Esta prueba es util para descubrir dependencias de codigo y 
	# mejorar la organización interna
	# Nos damos cuenta de qué es comun y que hay que cmabiar
	# entre cada partido
	def test_randomTestingManyMatches(self):
		self.match = Match()
		tests = 100000

		for x in range(tests):
			r = RandomPlay()
			self.createPlayers(ZERO, ZERO)
	
			self.match.playMatch(self.playerA, self.playerB, r)

			if r.getMostScoredPlayer() == "B":
				self.assertTrue(self.playerB.isWinner())
				self.assertFalse(self.playerA.isWinner())
				#print("Score A:" , self.playerA.getScore(), " Score B:", self.playerB.getScore())
			else:
				self.assertTrue(self.playerA.isWinner())
				self.assertFalse(self.playerB.isWinner())
				#print("Score A:" , self.playerA.getScore(), " Score B:", self.playerB.getScore())
		print(tests, " random tenis games done.")


#######
# Random testing

class RandomPlay:
	def __init__(self):
		self.players = ["A", "B"]
		self.values = {"A": 0, "B" :0}
	def getPlayerWhoScores(self):
		c = random.randint(0,1)
		self.values[self.players[c]] += 1
		return self.players[c]
	def getValues(self):
		return self.values
	def getMostScoredPlayer(self):
		key = max(self.values, key=self.values.get)
		return key

# Main
if __name__ == '__main__':
    unittest.main()